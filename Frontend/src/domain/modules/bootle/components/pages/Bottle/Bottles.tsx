import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";


const Bottles = () => {
    return (
        <div>
            <BottleCard
                bottle={{
                    id: "1",
                    img_id:"bottle.png",
                    name: "test-title",
                    type: "beer",
                    description: "test-description",
                    country: "sz",
                    amount: 1,
                    rating: 3.5,
                }}
                />
        </div>
    )
}

export default Bottles;