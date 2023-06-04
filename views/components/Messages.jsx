import React from "react";

const Messages = ({ messages }) => (
  <>
    {messages.errors &&
      messages.errors.map((element) => (
        <div className="m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {element.msg}
        </div>
      ))}
    {messages.info
      ? messages.info.map((element) => (
          <div className=" alert alert-danger text-red-600">
            {element.message}
          </div>
        ))
      : null}
  </>
);

export default Messages;
