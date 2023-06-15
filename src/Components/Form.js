import React from 'react';
import { useForm } from 'react-hook-form';

//i am Md Moklesur Rahman

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
      <label className='h1' htmlFor="buy">You want to buy an:</label>
      <input className='design' type="text" id="buy" {...register('wants_buy')} />

      <label className='h1' htmlFor="money">Money Needed:</label>
      <input className="design" type="number" id="money" {...register('money_need')} />

      <label className='h1' htmlFor="wait">You can wait in years:</label>
      <select className='design' id="wait" {...register('wait_years')}>
        <option value="1-3">1-3</option>
        <option value="4-5">4-5</option>
        <option value="6-8">6-8</option>
        <option value="9-10">9-10</option>
      </select>

      <label className='h1' htmlFor="salary">Your salary:</label>
      <input className="design" type="number" id="salary" {...register('salary')} />

      <label className='h1' htmlFor="expenses">Monthly expenses:</label>
      <div>
        <input type="checkbox" id="grocery" {...register('expenses')} value="Grocery" />
        <label htmlFor="grocery">Grosary</label>
      </div>
      <div>
        <input  type="checkbox" id="utility" {...register('expenses')} value="Utility bill" />
        <label htmlFor="utility">Utility not bill getting chill</label>
      </div>
      <div>
        <input  type="checkbox" id="houseRent" {...register('expenses')} value="House Rent" />
        <label htmlFor="ouseRent">House Rent</label>
      </div>
      <div>
        <input className="design" type="checkbox" id="medicine" {...register('expenses')} value="Medicine" />
        <label htmlFor="medicine">Medicine</label>
      </div>
      <input className="design" type="number" id="otherExpenses" {...register('total_expenses')} placeholder="Total Expenses" />

      <label className='h1' htmlFor="hours">Time you can give everyday:</label>
      <select className='design' id="hours" {...register('hours')}>
        <option value="30 minutes">30 minutes</option>
        <option value="1 hour">1 hour</option>
        <option value="1 hour 30">1 hour 30</option>
        <option value="2 hours">2 hours</option>
      </select>

      <label className='h1'>You can do it:</label>
      <div>
        <input type="radio" id="home" {...register('location')} value="home" />
        <label htmlFor="home">From Home</label>
      </div>
      <div>
        <input className="design" type="radio" id="physically" {...register('location')} value="physically" />
        <label htmlFor="physically">From Physically</label>
      </div>

      <label className='h1' htmlFor="interned">You have interned in:</label>
      <div>
        <input type="checkbox" id="webDevelopment" {...register('interned')} value="web development" />
        <label htmlFor="webDevelopment">Web Development</label>
      </div>
      <div>
        <input type="checkbox" id="cricket" {...register('interned')} value="cricket" />
        <label htmlFor="cricket">Cricket</label>
      </div>
      <div>
        <input type="checkbox" id="syberSecurity" {...register('interned')} value="syber security" />
        <label htmlFor="syberSecurity">Syber Security</label>
      </div>
      <div>
        <input type="checkbox" id="logoDesign" {...register('interned')} value="logo design" />
        <label htmlFor="logoDesign">Logo Design</label>
      </div>
      <div>
        <input className="design" type="checkbox" id="digitalMarketing" {...register('interned')} value="digital marketing" />
        <label htmlFor="digitalMarketing">Digital Marketing</label>
      </div>
      

      <button className='btn' type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
