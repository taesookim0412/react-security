// export function DirtyImage(props:any) {
//     return (
//         <div>
//             <img src={props.src}/>
//             <input value={props.src}/>
//         </div>
//     )
// }

//bad!!
import {Route, Link, BrowserRouter} from "react-router-dom";

export function DirtyAnchor(props: any) {
    return (
        <div>
            <a href="javascript:alert('XSS!');">Anchor!</a>
        </div>
    )
}

export function XSS() {
    const xssString: any = "javascript:alert('XSS!');";
    const xssFrame = <iframe src={xssString}/>;
    const xssFrameStr = xssFrame;
    // @ts-ignore
    // const badImg = <img src={''} onError={xssString}/>

    return (
        <div>
            <BrowserRouter>
                {/*<img src={xssString}/>*/}
                {/*<img src={''} onError={xssString}/>*/}
                {/*<DirtyImage src={xssString}/>*/}
                <DirtyAnchor src={xssString}/>
                <Link to={"/a"}>Link!</Link>
                {xssFrame}
                <Route exact path={"/a"} render={() =>
                    (<a id={"dirty"} href="javascript:alert('XSS!');">Anchor!</a>)} >
                </Route>
                <div onMouseEnter={() => new Function(xssString)()} style={{height: '400px', width: '400px', backgroundColor: 'grey'}}>

                </div>
            </BrowserRouter>
        </div>
    )
}
