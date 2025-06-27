import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import "./ProductCard.css";
import PropTypes from "prop-types";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(255,0,128,0.15)" }}
      transition={{ duration: 0.3 }}>
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name brand">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="add-to-cart-btn btn btn-add-bag btn-danger"
          onClick={handleRemove}>
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="add-to-cart-btn btn btn-add-bag btn-success"
          onClick={handleAddToBag}>
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </motion.div>
  );
};

HomeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      stars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    company: PropTypes.string,
    item_name: PropTypes.string,
    current_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    original_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount_percentage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};

export default HomeItem;
