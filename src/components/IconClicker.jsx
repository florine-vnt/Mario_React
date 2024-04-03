import { useState } from "react";

function IconClicker(){
    const [count, setCount] = useState(0);

    return(
        <div className='flex-container space-between'>
        <button className="icon-click" type="button" onClick={() => setCount((count) => count + 1)}><img src="src/assets/coin.png" alt="coin" className="coin" /> </button> <span className='result-click'>{count}</span>
    </div>

    )

}

export default IconClicker;