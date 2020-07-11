import React, { useRef, useLayoutEffect, MutableRefObject } from 'react'

import store from "../redux/store";
import uiSlice from '../redux/slices/ui';

const Overlay : React.FC<{}> = () => {

    const ref : MutableRefObject<any> = useRef(null);


    useLayoutEffect(() => {
        const handleScrollEvent = (evt : any) => {
            let scroll = ref.current.scrollTop;

            store.dispatch(
                uiSlice.actions.updateScroll({
                    scroll: scroll,
                })
            );
        }
    
        ref.current.addEventListener('scroll', handleScrollEvent);
    
        return () => ref.current.removeEventListener('scroll', handleScrollEvent);
    }, [])
    let numbers : any = Object.keys(Array(5));
    return(
        <div ref={ref} style={{color: "white"}} id="content">
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
            <h1>THING</h1>
        </div>
    );

};

export default Overlay;
