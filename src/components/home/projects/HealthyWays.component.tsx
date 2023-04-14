import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiSubtractFill } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import { BiRupee } from 'react-icons/bi';
import { motion } from 'framer-motion';

const foodItems = [
  {
    id: 1,
    name: 'Puri Bhaji',
    amount: 100,
    image:
      'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.webp',
  },
  {
    id: 2,
    name: 'Tomato Rice',
    amount: 70,
    image:
      'https://www.simplyrecipes.com/thmb/vXAby2R_7_SmVeXxjAc6uutFm10=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tomato-Rice-LEAD-01-7bfe3f558b124c6e80d47a1da8ef97ae.jpg',
  },
  {
    id: 3,
    name: 'Dosa',
    amount: 60,
    image:
      'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
  },
  {
    id: 4,
    name: 'Noodles',
    amount: 60,
    image:
      'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
  },
];

interface foodInterFace {
  id: number;
  name: string;
  amount: number;
  image: string;
  count: number;
}

const HealthyWays = () => {
  const [items, setItems] = useState<foodInterFace[]>([
    {
      id: 1,
      name: 'Puri Bhaji',
      amount: 100,
      image:
        'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.webp',
      count: 1,
    },
  ]);

  const handleAdd = (index: number) => {
    let foodItem = foodItems.find((item) => item.id === index);
    const existingItem = items.find((item) => item.id === index);

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === index ? { ...item, count: item.count + 1 } : item
      );
      setItems(updatedItems);
    } else {
      foodItem = {
        ...foodItem,
        count: 1,
      };
      setItems([...items, foodItem]);
    }
  };

  const handleDecrease = (index: number) => {
    let foodItem = foodItems.find((item) => item.id === index);
    const existingItem = items.find((item) => item.id === index);

    if (existingItem?.count == 1) {
      const updatedItems = items.filter((item) => item.id === index);
      setItems(updatedItems);
    } else {
      const updatedItems = items.map((item) =>
        item.id === index ? { ...item, count: item.count - 1 } : item
      );
      setItems(updatedItems);
    }
  };

  const handleRemove = (index: number) => {
    const updatedItems = items.filter((item) => item.id !== index);
    setItems(updatedItems);
  };

  const totalValue = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <motion.div
      initial={{
        x: '-100px',
        opacity: 0.3,
      }}
      whileInView={{
        x: '0',
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' },
      }}
      className="bg-gradient-to-r h-full w-full from-sky-500 via-blue-500 p-0.5 to-indigo-500 rounded-xl"
    >
      <div className="h-full w-full bg-indigo-950 rounded-xl p-4 flex flex-col items-center gap-4 justify-between">
        <h1 className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-700  text-transparent bg-clip-text font-bold text-center text-4xl">
          HealthyWays
        </h1>
        <div className="flex items-center gap-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="rounded-md flex flex-col gap-1 items-center justify-center bg-slate-950 p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                height={56}
                width={64}
                className="rounded-md"
              />
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-indigo-400 text-md">{item.name}</p>
                <p className="text-green-500 text-sm flex items-center">
                  {' '}
                  <BiRupee size={18} /> {item.amount}
                </p>
                <button
                  className="border-2 text-sm border-indigo-900 text-indigo-400 hover:bg-indigo-400 hover:text-indigo-900 p-1 rounded-md flex items-center gap-1"
                  onClick={() => handleAdd(item.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <AiOutlineShoppingCart size={24} className="text-indigo-400" />
            <p className="text-indigo-400 text-xl">Cart Items</p>
          </div>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <div
                className="bg-slate-900 p-2 flex justify-between rounded-md cursor-pointer hover:bg-slate-950"
                key={item.id}
              >
                <p className="text-indigo-400">{item.name}</p>
                <div className="flex items-center gap-3">
                  <p className="text-white flex items-center">
                    <BiRupee size={18} /> {item.amount} X {item.count}
                  </p>
                  <IoMdAdd
                    size={16}
                    className="text-green-600 cursor-pointer"
                    onClick={() => handleAdd(item.id)}
                  />
                  <RiSubtractFill
                    size={16}
                    className="text-yellow-600 cursor-pointer"
                    onClick={() => handleDecrease(item.id)}
                  />
                  <RxCross1
                    size={16}
                    className="text-rose-600 cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end">
            <p className="font-semibold text-indigo-400 flex items-center">
              {' '}
              Total : <BiRupee size={18} /> {totalValue} + 18% GST ={' '}
              <BiRupee size={18} /> {totalValue + totalValue * 0.18}
            </p>
          </div>
        </div>
        <button className="bg-indigo-400 py-1 rounded-md w-full text-indigo-900 font-semibold">
          Pay Now
        </button>
      </div>
    </motion.div>
  );
};

export default HealthyWays;
