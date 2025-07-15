import React from "react";
import { Link } from "react-router-dom";

export default function TabNavigation() {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-blue-50 py-4">
      <Link
        to="/universities?country=Georgia"
        className="px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        MBBS in Georgia
      </Link>
      <Link
        to="/universities?country=Russia"
        className="px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        MBBS in Russia
      </Link>
      <Link
        to="/universities?country=Vietnam"
        className="px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        MBBS in Vietnam
      </Link>
      <Link
        to="/universities?country=USA"
        className="px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        Masters in USA
      </Link>
      <Link
        to="/universities?country=UK"
        className="px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        Masters in UK
      </Link>
      <Link
        to="/universities?country=Australia"
        className="px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        Masters in Australia
      </Link>
    </div>
  );
}
