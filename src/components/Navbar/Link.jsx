import React from 'react';

const Link = ({route}) => {
    return (
      <li className="font-semibold text-[#101727]">
        <a href="">{route.name}</a>
      </li>
    );
};

export default Link;