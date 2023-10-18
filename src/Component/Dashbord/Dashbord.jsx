import React from 'react'
import DonutChart from '../donut/Donut';
import { BsSearch } from 'react-icons/bs'
import { ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';
import './Dashboard.css'
import { FiChevronDown } from 'react-icons/fi'
import abs from '../../Assets/abs.jpg'
import sph from '../../Assets/sph.jpg'
import { AiOutlineDollar } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import { LuWallet } from 'react-icons/lu'
import { HiMiniArrowSmallDown, HiMiniArrowSmallUp, HiOutlineShoppingBag } from 'react-icons/hi2'

const Dashbord = () => {

  const customers = [
    { name: 'Banana', value: 15 },
    { name: 'Apple', value: 20 },
    { name: 'Orange', value: 25 }
  ];

  const products = [
    { name: 'Product 1', stock: 100, price: '$10', totalSales: 500, discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { name: 'Product 2', stock: 50, price: '$20', totalSales: 1000, discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    // Add more products as needed
  ];


  const data = [
    {
      "name": "Jan",
      "uv": 3500,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Feb",
      "uv": 3000,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Mar",
      "uv": 2000,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Apr",
      "uv": 2780,
      "color": "#8884d8" // Default color
    },
    {
      "name": "May",
      "uv": 1890,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Jun",
      "uv": 2390,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Jul",
      "uv": 3490,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Aug",
      "uv": 4000,
      "color": "red",
      // Set color for August
    },
    {
      "name": "Sep",
      "uv": 3090,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Oct",
      "uv": 3400,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Nov",
      "uv": 2090,
      "color": "#8884d8" // Default color
    },
    {
      "name": "Dec",
      "uv": 3100,
      "color": "#8884d8" // Default color
    }
  ];

  const customBar = (props) => {
    const { x, y, width, height, fill, payload } = props;

    return (
      <rect x={x} y={y} width={width} height={height} fill={payload.uv >= 4000 ? 'gray' : 'rgb(237, 236, 236)'} rx={10} ry={10} />
    );
  };



  return (
    <>
      <section className='main_contain'>
        <div className='data_cards'>
          <div className='data_card' >
            <span className='icon_card'><AiOutlineDollar id='data_icon' /></span>
            <div className='data_'>
              Earning
              <h3 className='data_value'>$198k</h3>
              <span className='earning_'><span id='earning'><HiMiniArrowSmallUp />37.8%</span> this months </span>
            </div>

          </div >
          <div className='data_card' >
            <span className='icon_card_1'><CgNotes className='data_icon_1' /></span>
            <div className='data_'>
              Orders
              <h3 className='data_value'>$2.4k</h3>
              <span className='earning_'><span className='earning1'><HiMiniArrowSmallDown />2%</span> this months </span>
            </div>

          </div >
          <div className='data_card' >
            <span className='icon_card_2'><LuWallet className='data_icon_2' /></span>
            <div className='data_'>
              Balance
              <h3 className='data_value'>$198k</h3>
              <span className='earning_'><span span className='earning1'><HiMiniArrowSmallDown />2%</span> this months </span>
            </div>

          </div >
          <div className='data_card' >
            <span className='icon_card_3'><HiOutlineShoppingBag className='data_icon_3' /></span>
            <div className='data_'>
              Total Sales
              <h3 className='data_value'>$87k</h3>
              <span className='earning_'><span id='earning'><HiMiniArrowSmallUp />11%</span> this week </span>
            </div>

          </div >

        </div>
        <div className='bar_charts'>
          <div className='barChart'>
            <div className='sider'>
              <div className='sider_'>
                <h3 className='sider_over' >Overview</h3>
                Monthly Earning
              </div>
              <span className='right_span'>Quarterly  <FiChevronDown /></span>
            </div>
            <ResponsiveContainer width="100%" aspect={3}>
              <BarChart width={700} height={700} data={data}
                margin={{
                  top: 15,
                  right: 30,
                  left: 15,

                }}>
                <XAxis dataKey="name" className="x-axis" />
                <Bar className='bar_' dataKey="uv" radius={[10, 10, 10, 10]}
                  shape={customBar} />
              </BarChart>

            </ResponsiveContainer>

          </div>
          <div className='circle_progress'>
            <div className='piechart_header'><h3 className="cutomer">Customers</h3>Customers that buy products</div>
            <div className='pie_chart'>

              <DonutChart data={customers} />
              <span className="custom-label"> <h3 className='circle_'>65%</h3> Total New Customers</span>
            </div>

          </div>
        </div>
        <div className='footer_'>
          <div className='footer_header'>
            <h3 className='head__title'>Product Sell</h3>
            <div className='header-left'>
              <BsSearch className='icon--' />
              <input type="text" placeholder='Search' className='input_search' />
            </div>
            <span className='last_days'>Last 30 days <FiChevronDown /> </span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tr>
              <td>
                <div class="product-info">
                  <img className='table_image' src={abs} alt="Product Image" />
                  <div className='prod'>
                    <h4>Abstract 3D</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </td>
              <td>32 in Stock</td>
              <td>$49.99</td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <div class="product-info">
                  <img className='table_image' src={sph} alt="Product Image" />
                  <div className='prod'>
                    <h4>Sarphens Illustration</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </td>
              <td>32 in Stock</td>
              <td>$49.99</td>
              <td>20</td>
            </tr>
          </table>
        </div>

      </section>
    </>
  )
}

export default Dashbord