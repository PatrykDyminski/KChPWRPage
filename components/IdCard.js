export default function IdCard({name, imgSource}){
    return(
        <div className="pb-4">
            <img src={imgSource} className="rounded-full transform scale-75"></img>
            <div className="text-lg text-center">{name}</div>
        </div>
    )
}