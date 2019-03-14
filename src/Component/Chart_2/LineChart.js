import React, {PureComponent} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import "./LineChart.css";

const data = [{name: '1800', uv: 1},
    {name: '1850', uv: 1.2},
    {name: '1900', uv: 1.7},
    {name: '1950', uv: 2.5},
    {name: '2000', uv: 6},
    {name: '2020', uv: 8}];

const renderLineChart = (
    <LineChart className="line" width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
);

class LineCharts extends PureComponent{

    render() {
        return (
            renderLineChart
        );
    }

}

export {LineCharts};