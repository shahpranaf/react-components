import React from 'react'
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import SliderPage from './pages/SliderPage';
import Accordion from './components/Accordion';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import CounterPageReducer from './pages/CounterPageReducer';
import ImmerReducerPage from './pages/ImmerReducerPage';

const components = [
    {
        'label': 'Dropdown',
        "content": <DropdownPage />
    },
    {
        'label': 'Accordion',
        "content": <AccordionPage />
    },
    {
        'label': 'Button',
        "content": <ButtonPage />
    },
    {
        'label': 'Slider',
        "content": <SliderPage />
    }
]


function App() {
    return (
        <div className='container mx-auto grid grid-cols-6 gap4 mt4'>
            <Sidebar />
            <div className='col-span-5'>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/slider">
                    <SliderPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={10} />
                </Route>
                <Route path="/counter-reducer-immer">
                    <ImmerReducerPage initialCount={10} />
                </Route>
                <Route path="/counter-reducer">
                    <CounterPageReducer initialCount={10} />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
            </div>
        </div>
    )
}

export default App