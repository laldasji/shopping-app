import { useOutletContext } from "react-router-dom";
import { increaseCount, decreaseCount } from "./changeItemCount";

function Cart() {
    const {itemsList, itemsAdded, setItemsAdded } = useOutletContext();
    if (itemsAdded.length > 0)
        return (
        <div className="p-5 flex flex-col place-items-center bg-gray-100">
            {
                itemsAdded.map(element => {
                        const currentItem = itemsList.find(item => item.id === element.id)
                        return <div key={element.id} className="m-10 p-10 w-9/10 h-9/10 relative bg-white shadow shadow-slate-400 hover:shadow-2xl duration-200 max-w-full
                        md:grid md:grid-cols-[1fr_2fr] sm:flex sm:flex-col">
                            <img className='place-self-center w-4/5' src={currentItem.image} alt={currentItem.title} />
                            <div className="max-w-full grid grid-rows-[auto_auto_4rem] relative">
                                <h1 className="text-5xl m-2">
                                    {currentItem.title}
                                </h1>
                                <p className="text-2xl">
                                    {currentItem.description.length > 400 ? currentItem.description.slice(0, 397) + '...' : currentItem.description}
                                </p>
                                <div className="h-12 border-slate-700 border-4 self-center absolute bottom-2 w-full rounded-full">
                                    <button className="bg-slate-700 h-full aspect-3/2 cursor-pointer absolute -left-0.75 top-0 rounded-l-full" onClick={() => {decreaseCount(element, itemsAdded, setItemsAdded)}}>
                                        <img src="/icons/svg/decrease.svg" alt="" className="h-3/5 m-auto" />
                                    </button>
                                    <h1 className="w-min m-auto text-slate-700">{itemsAdded.find(item => item.id === element.id).count}</h1>
                                    <button className="bg-slate-700 h-full aspect-3/2 cursor-pointer absolute -right-0.75 top-0 rounded-r-full" onClick={() => {increaseCount(element, itemsAdded, setItemsAdded)}}>
                                        <img src="/icons/svg/increase.svg" alt="" className="h-3/5 m-auto" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                )
            }
        </div>
    ) 
    else {
        return (
            <div className="h-[calc(100dvh-132px)] grid place-items-center">
                <h1 className="text-6xl text-center">
                    Uhm... looks like your cart is empty hehe
                </h1>
            </div>
        )
    }
}

export default Cart;