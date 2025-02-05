import { useOutletContext } from "react-router-dom";
import { increaseCount, decreaseCount } from "./changeItemCount";

function Store() {
    const { itemsList, loaded, itemsAdded, setItemsAdded } = useOutletContext();
    return (
    <div className="p-5 grid grid-cols-[repeat(auto-fit,_minmax(375px,1fr))] auto-rows-[650px] place-items-center h-min bg-gray-100">
        {
            !loaded ? <h1>loading... please wait</h1> :
                itemsList.map(element => 
                    <div className="w-9/10 h-9/10 p-2 relative bg-white shadow shadow-slate-400 hover:shadow-2xl duration-200 flex flex-col" key={element.id}>
                        <span className="h-1/2 flex items-center justify-center" title={element.title}>
                            { element.image ? <img className="w-1/2 m-2 self-center max-h-full" src={element.image} alt={element.category} /> : <h2>Loading...</h2>}
                        </span>
                        <h1 className="m-2 truncate">{element.title}</h1>
                        <h2 className="m-2 font-black">Price: ${element.price}</h2>
                        <p>{element.description.length > 70 ? element.description.slice(0, 67) + '...' : element.description}</p>
                        {
                            !itemsAdded.some(item => item.id === element.id) ?
                                <button className="h-12 bg-slate-700 self-center absolute bottom-2 w-[calc(100%-1rem)] flex justify-center items-center rounded-full cursor-pointer"
                                onClick={() => {increaseCount(element, itemsAdded, setItemsAdded)}}>
                                    <p className="text-slate-300 m-3">Add to Cart</p>
                                    <img className="h-3/5" src="/icons/svg/add-to-cart.svg" alt="Add to Cart" />
                                </button>
                                : <div className="h-12 border-slate-700 border-4 self-center absolute bottom-2 w-[calc(100%-1rem)] rounded-full">
                                    <button className="bg-slate-700 h-full aspect-3/2 cursor-pointer absolute -left-0.75 top-0 rounded-l-full" onClick={() => {decreaseCount(element, itemsAdded, setItemsAdded)}}>
                                        <img src="/icons/svg/decrease.svg" alt="" className="h-3/5 m-auto" />
                                    </button>
                                    <h1 className="w-min m-auto text-slate-700">{itemsAdded.find(item => item.id === element.id).count}</h1>
                                    <button className="bg-slate-700 h-full aspect-3/2 cursor-pointer absolute -right-0.75 top-0 rounded-r-full" onClick={() => {increaseCount(element, itemsAdded, setItemsAdded)}}>
                                        <img src="/icons/svg/increase.svg" alt="" className="h-3/5 m-auto" />
                                    </button>
                                </div>
                        }
                    </div>
            )
        }
    </div>)
}

export default Store;