import CostFrom from './CostFrom';
import './NewCost.css'
const NewCost = (props) => {

    const SaveCostDataHandler = (inputCostData) => 
    {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
    }

    return (

        <div className="new-cost">
            <CostFrom onSaveCostData=
            {SaveCostDataHandler} />
        </div>
    )
}
export default NewCost;