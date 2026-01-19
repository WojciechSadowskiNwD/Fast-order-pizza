import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 rounded-xl bg-green-600 px-3 py-1.5 font-semibold">
        Your cart is still empty. Start adding some pizzas. 😉
      </p>
    </div>
  );
}

export default EmptyCart;
