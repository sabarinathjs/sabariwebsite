import React from "react";

function Header() {
  const headerStyles = {
    color: "blue", 
    textAlign: "center",
    bgcolor:"red"
  };

  return (
    <div className="header">
      <h1 style={headerStyles}>Sabarinath JS </h1>
    </div>
  );
}

export default Header;