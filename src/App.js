import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './Components';
import { Ecommerce, Order, Calender, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './Pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Order />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calender />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import React, { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import './App.css'
// import LineCharts from './Components/Charts/LineCharts';
// import { Navbar, Footer,Sidebar,ThemeSettings } from './Components';
// import { Ecommerce,Order,Calender,Stacked, Kanban,Area,Bar,ColorMapping,ColorPicker,Financial,Pie,Pyramid,Editor, Employees, Customers} from './Pages';
// import './App.css';

// import { useStateContext } from './contexts/ContextProvider';

// const App = () => {
//     const activeMenu = true;
//   return (
//     <div>
//         <BrowserRouter>
//             <div className='flex relative dark:bg-main-dark-bg'>
//                 <div className="fixed bottom-0 right-0 mb-4 mr-4" style={{zIndex:'1000'}}>
//                     <TooltipComponent content="Settings" position="Top">
//                         <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue',borderRadius:'50%'}}>
//                             <FiSettings/>
//                         </button>
//                     </TooltipComponent>
//                 </div>
//                 {activeMenu?(
//                     <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
//                         <Sidebar/>
//                     </div>
//                 ):(
//                     <div className='w-0 dark:bg-secondary-dark-bg'>
//                         <Sidebar/>
//                     </div>
//                 )}
//                 <div className={
//                     `dark:bg-main-bg bg-main-bg min=h-screen w-full  ${activeMenu?'md:ml-72':'flex-2 '}`
//                 }>
//                     <div className='fixed md:static bg-main-bg  dark:bg-main-dark-bg navbar w-full'>
//                         <Navbar/>
//                     </div>
//                 </div>
//                 <div>
//                     <Routes>
//                         <Route path='/' element={<Ecommerce/>}/>
//                         <Route path='/ecommerce' element={<Ecommerce/>}/>
//                         <Route path='/orders' element={<Order/>}/>
//                         <Route path='/employees' element={<Employees/>}/>
//                         <Route path='/customers' element={<Customers/>}/>

//                         <Route path="/kanban" element={<Kanban/>}/>
//                         <Route path="/editor" element= {<Editor/>} />
//                         <Route path="/calendar" element={<Calender/>} />
//                         <Route path="/color-picker" element={<ColorPicker/>}/>

//                         {/* charts  */}
//                         <Route path="/line" element={<LineCharts/>}/>
//                         <Route path="/area" element={<Area/>}/>
//                         <Route path="/bar" element={<Bar/>}/>
//                         <Route path="/pie" element={<Pie/>} />
//                         <Route path="/financial" element={<Financial/>}/>
//                         <Route path="/color-mapping" element={<ColorMapping/>}/>
//                         <Route path="/pyramid" element={<Pyramid/>} />
//                         <Route path="/stacked" element={<Stacked/>}/>
//                     </Routes>
                    
//                 </div>
                
//             </div>
//             <Footer/>
//         </BrowserRouter>
//     </div>
//   )
// }

// export default App 