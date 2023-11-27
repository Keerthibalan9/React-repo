import apple from '../images/picture.jpeg'

export default function Output() {
    return (
        <>
            <h1>Hello manual folder</h1>
            <img src="https://images.pexels.com/photos/19017576/pexels-photo-19017576/free-photo-of-sunflowers-photograpy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
            <img src={apple}/>
        </>
    )
}

export function Output1(){
    return(
        <>  
        <h1>Second Function</h1>
        </>
    )
}
export function Output3(){
    return(
        <>  
        <h1>third Function</h1>
        </>
    )
}
