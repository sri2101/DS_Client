import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ segments = [] }) => {
  return (
    <nav className="text-sm text-gray-500 mb-2 flex flex-wrap">
      {segments.map((segment, index) => (
        <span key={index} className="flex items-center">
          {segment.path ? (
            <Link to={segment.path} className="hover:underline text-blue-600">
              {segment.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{segment.label}</span>
          )}
          {index < segments.length - 1 && <span className="mx-1">›</span>}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumb;
