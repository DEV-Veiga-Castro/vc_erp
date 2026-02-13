import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, List, ListItemButton, ListItemText, Collapse, ListItemIcon } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { useAuth } from "../auth/AuthContext";

const drawerWidth = 240;

export default function Sidebar() {
    const { hasPermission } = useAuth();
    const location = useLocation();

    const [openMenus, setOpenMenus ] = useState({
        rh: false,
        produtoFuncionario: false
    });

    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    const menuConfig = [
        {
            id: "rh",
            label: "RH",
            children: [
                {
                    label: "Funcionários",
                    link: "/rh/funcionarios",
                    permission: "RH_FUNCIONARIOS_VIEW"
                }
            ]
        },
        {
            id: "produtoFuncionario",
            label: "Produto Funcionário",
            children: [
                {
                    label: "Produtos",
                    link: "/produtoFuncionario/produtos",
                    permission: "PRODUTO_FUNCIONARIO_PRODUTOS_VIEW"
                }
            ]
        }
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <List>
                {menuConfig.map((menu) => (
                    <div key={menu.id}>
                        {/* Menu Principal */}
                        <ListItemButton onClick={() => toggleMenu(menu.id)}>
                            <ListItemText primary={menu.label} />
                            {openMenus[menu.id] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openMenus[menu.id]} timeout="auto" unmountOnExit>
                            <List
                                component="div" disablePadding
                            >
                                {menu.children.map((item) => {
                                    const hasAccess = hasPermission(item.permission);
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <ListItemButton
                                            key={item.path}
                                            component={Link}
                                            to={hasAccess ? item.path : ""}
                                            disabled={!hasAccess}
                                            sx={{
                                              pl: 4,
                                              color: isActive ? "primary.main" : "inherit",
                                            }}
                                        >
                                            <ListItemText primary={item.label} />
                                        </ListItemButton>
                                    );
                                })}
                            </List>
                        </Collapse>                        
                    </div>
                ))}
            </List>
        </Drawer>
    )
}