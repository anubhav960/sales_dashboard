import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import {} from "recharts";
let Charts = () => {
  const data1 = [
    {
      name: "0",
      uv: 0,
      pv: 0,
    },
    {
      name: "6",
      uv: 5,
      pv: 3,
    },
    {
      name: "12",
      uv: 7,
      pv: 5,
    },
    {
      name: "18",
      uv: 14,
      pv: 12,
    },
    {
      name: "24",
      uv: 18,
      pv: 16,
    },
  ];

  const data2 = [
    {
      name: "0",
      uv: 7,
      pv: 5,
    },
    {
      name: "6",
      uv: 5,
      pv: 3,
    },
    {
      name: "12",
      uv: 6,
      pv: 8,
    },
    {
      name: "18",
      uv: 9,
      pv: 2,
    },
    {
      name: "24",
      uv: 5,
      pv: 7,
    },
  ];

  let colors = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  let colorMap = {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
	600: "#c026d3",
	700: "#a21caf",
	800: "#86198f",
	900: "#701a75"
  };

  let OrdersData = [
    ["Facebook", [15, 25, 45, 15, 15, 45, 15, 25]],
    ["Youtube", [35, 25, 15, 45, 35, 45, 15, 25]],
    ["TikTok", [15, 15, 35, 25, 35, 15, 25, 35]],
    ["WhatsApp", [35, 15, 45, 35, 45, 25, 25, 35]],
    ["Google", [15, 35, 45, 25, 15, 35, 35, 25]],
  ];

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-7 flex justify-between gap-8">
        <div className="">
          <div className=" flex justify-between">
            <span className="text-xl font-bold mb-5">Sales</span>
            <span className="text-baseline text-blue-500"> All sales </span>
          </div>
            <LineChart width={250} height={250} data={data1}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
        <div className="">
          <div className=" flex justify-between">
            <span className="text-xl font-bold mb-5">Leads</span>
            <span className="text-baseline text-blue-500"> All Leads </span>
          </div>
          <BarChart width={350} height={250} data={data2}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar type="monotone" dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar type="monotone" dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex justify-between">
          <span className="text-xl font-bold mb-5">Orders</span>
          <span className="text-baseline text-gray-900 flex">
            <div className="pr-2">0</div>
            <svg width={"20"} height={"25"}>
              <rect x="3" y="7" width="12" height="12" fill="#fdf4ff" />
            </svg>
            <svg width={"20"} height={"25"}>
              <rect x="3" y="7" width="12" height="12" fill="#fae8ff" />
            </svg>
            <svg width={"20"} height={"25"}>
              8
              <rect x="3" y="7" width="12" height="12" fill="#f5d0fe" />
            </svg>
            <svg width={"20"} height={"25"}>
              <rect x="3" y="7" width="12" height="12" fill="#f0abfc" />
            </svg>
            <svg width={"20"} height={"25"}>
              <rect x="3" y="7" width="12" height="12" fill="#e879f9" />
            </svg>
            <div> 500</div>
          </span>
        </div>
        <div className="grid grid-cols-2">
          <table>
            <tbody>
              {OrdersData.map((elmt, ind) => {
                return (
                  <tr key={ind}>
                    <td>
                      <div className="mr-4">{elmt[0]}</div>
                    </td>
                    {elmt[1].map((elmt1, ind) => {
						let colorScore = colors[Math.floor(elmt1 / 10)]
                      let colorBg = colorMap[colorScore];
					  function changeBackground(e) {
						e.target.style.color = "black";
					  }
					  function onmouseleave(e) {
						e.target.style.color = colorBg
					  }
					  
                      return (
                        <td key={ind}>
                          {/* <div
                            className={`hover:text-gray-900 border-2 border-fuchsia-${colorScore} hover:border-gray-900 hover:border-gray-900 m-0.5 p-1 rounded bg-fuchsia-${colorScore} text-fuchsia-${colorScore}`}
                          >
                            {colorScore}
                          </div> */}
                          <div
						  	style={{backgroundColor: colorBg, color: colorBg,}}
							onMouseOver={changeBackground}
							onMouseLeave={onmouseleave}
                            className={`hover:text-gray-900 border-2 border-fuchsia-${colorScore} hover:border-gray-900 hover:border-gray-900 m-0.5 p-1 rounded`}
                          >
                            {colorScore}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    00
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    04
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    08
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    12
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    16
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    20
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    24
                  </div>
                </td>
                <td>
                  <div className="px-1 mx-0.5 text-center text-gray-400">
                    28
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Charts;
