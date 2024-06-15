import './dashboard.css'
import './fonts.css'


const DBHighlight = () => {
    const amountSpent = 1972.37;
    const budget = 2000;
    const amountRemaining = budget-amountSpent;
    const today = new Date();
    const daysLeftinMonth = new Date(today.getFullYear(),  today.getMonth()+1, 0).getDate() - today.getDate(), daysCompletedinMonth = today.getDate() - 1;
    return(
        <>
            <div className="DBHighlight">
                <div>
                    <p className='roboto-regular DBalign-left'>You spent</p>
                    <blockquote>
                        <span className='urbanist-black'>$</span>
                        <span className='urbanist-black'>{amountSpent.toFixed(2)}</span>
                    </blockquote>
                    <p className='roboto-bold DBalign-center'>$ {(amountSpent / daysCompletedinMonth).toPrecision(3)}/day</p>
                    <p className='roboto-light DBalign-right'>this month</p>
                </div>
                <div>
                    <p className='roboto-regular DBalign-left'>Remaining balance</p>
                    <blockquote>
                        <span className='urbanist-black'>$</span>
                        <span className='urbanist-black'>{amountRemaining.toFixed(2)}</span>
                    </blockquote>
                    <p className='roboto-bold DBalign-center'>$ {(amountRemaining / daysLeftinMonth).toPrecision(3)}/day</p>
                    <p className='roboto-light DBalign-right'>this month</p>
                </div>
            </div>
        </>
    );
}

const DBExpenseAdd = () => {
    return(
        <>
            <div className='DBExpenseAdd'>
                <div>
                    <section className="DBinput-container">
                        {/* <label for="description">Description</label> */}
                        <input type="text" id="username" name="username" placeholder="Description"/>
                    </section>
                    <section className="DBinput-container">
                        {/* <label for="category">Category</label> */}
                        <input type="text" id="username" name="username" placeholder="Category"/>
                    </section>
                </div>
                <div>
                    <section className="DBinput-container">
                        {/* <label for="category">Category</label> */}
                        <input type="number" id="username" name="username" placeholder="Amount"/>
                    </section>
                    <section className="DBinput-container">Cash?</section>
                </div>
                <div>
                    <section className="DBinput-container">
                        <button>Add</button>
                    </section>
                </div>

            </div>
        </>
    );
}

const DBDetail = () => {
    return(
        <>
            <div className='DBDetail'>
                <div></div>
            </div>
        </>
    );
}

const Dashboard = () => {
    return(
        <>
            <DBHighlight/>
            <DBExpenseAdd/>
            {/* <DBDetail/> */}
        </>
    );
}

export default Dashboard;
