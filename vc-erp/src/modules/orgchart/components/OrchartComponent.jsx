import { createContext, useState, useEffect, useRef } from "react";
import Orgchart from "@balkangraph/orgchart.js";
import api from "../../../api/axios";
import { Box } from "@mui/material";
import OrgChart from "@balkangraph/orgchart.js";

export default function OrgChartComponent() {
    const chartRef = useRef(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        OrgChartData();
    }, []);

    useEffect(() => {

        OrgChart.SEARCH_PLACEHOLDER = "Buscar colaborador";

        OrgChart.templates.ula.plus = `<div class="${OrgChart.templates.ula.nodeClass}" style="${OrgChart.templates.ula.nodeStyle}">
            <div class="${OrgChart.templates.ula.field_0}" style="${OrgChart.templates.ula.field_0Style}">${OrgChart.templates.ula.field_0Content}</div>
            <div class="${OrgChart.templates.ula.field_1}" style="${OrgChart.templates.ula.field_1Style}">${OrgChart.templates.ula.field_1Content}</div>
            <div class="${OrgChart.templates.ula.field_2}" style="${OrgChart.templates.ula.field_2Style}">${OrgChart.templates.ula.field_2Content}</div>
            <div class="${OrgChart.templates.ula.field_3}" style="${OrgChart.templates.ula.field_3Style}">${OrgChart.templates.ula.field_3Content}</div>
            <div class="${OrgChart.templates.ula.img_0}" style="${OrgChart.templates.ula.img_0Style}">${"https://cdn-icons-png.flaticon.com/512/9385/9385289.png"}</div>
        </div>`;
        OrgChart.templates.itTemplate = Object.assign({}, OrgChart.templates.ula);


        const chart = new Orgchart(chartRef.current, {
            scaleInitial: OrgChart.match.boundaryIfOutside,
            template: "ula",
            nodes: data,
            collapse: true,
            editForm: false,
            nodeMouseClick: OrgChart.action.details,
            menu: false,
            layout: 1,
            collapse: {
                level: 2,
            },
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                field_2: "email",
                field_3: "id",
                img_0: "image",
            },
        });

        chart.fit();

        return () => {
            chart.destroy();
        };
    }, [data]);

    async function OrgChartData() {
        const response = await api.get("/orgchart");
        setData(response.data);
    }

    return (
        <Box ref={chartRef} />
    );
}

