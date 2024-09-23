const Header = () => {
  const nav: string[] = ["Home", "Menu", "About Us", "Contact Us"];
  return (
    <>
      {nav.map((el) => (
        <p>{el}</p>
      ))}
    </>
  );
};

export default Header;
