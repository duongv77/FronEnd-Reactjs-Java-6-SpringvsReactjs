import { Bar } from "react-chartjs-2";
import OrderAPI from "../../api/OrderAPI";
import { useEffect , useState} from "react";

function AdminHome() {
    const [doanhThu, setDoanhThu] = useState({})
    useEffect(()=>{
        const callApiDoanhThu = async() => {
            try {
                const url = '/api/v2/admin/doanhthu'
                const response = await OrderAPI.get(url)
                setDoanhThu(response)
            } catch (error) {
                console.log(error)
            }
        }
        callApiDoanhThu()
    },[])
    return (
        <div className="col-8 offset-2 mt-5">
            <Bar
                data={{
                    labels: [
                        "Tháng 1",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12"
                    ],
                    datasets: [
                        {
                            label: "Doanh thu năm 2021 (VNĐ)",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#c45850",
                                "#33FF66",
                                "#FF99FF",
                                "#FF9999",
                                "#FF6600",
                                "#333300",
                                "#00EE00",
                                "#000099"
                            ],
                            data: [doanhThu.thang1, doanhThu.thang2, doanhThu.thang3, doanhThu.thang4, doanhThu.thang5, doanhThu.thang6, doanhThu.thang7, doanhThu.thang8, doanhThu.thang9, doanhThu.thang10, doanhThu.thang11, doanhThu.thang12]
                        }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: {
                        display: false,
                        text: "Predicted world population (millions) in 2050"
                    }
                }}
            />
        </div>
    )
}

export default AdminHome;