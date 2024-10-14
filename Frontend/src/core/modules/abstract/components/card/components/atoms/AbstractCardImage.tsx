
interface AbstractCardImageProps {
    img : string;
}

const AbstractCardImage = ({ img } : AbstractCardImageProps) => {
    return (
        <img src={`src/img/liquor/${img}`} alt={"picture of the flag"} style={{ width: 160, height: 200 }}/>
    )
}

export default AbstractCardImage;

