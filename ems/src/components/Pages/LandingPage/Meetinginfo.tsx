import React from 'react';

const MeetingInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-4">
      <div className="text-center font-bold mb-4">
        <h1 className="text-2xl">Online NA Meeting</h1>
      </div>
      <div className="relative flex items-center">
        <div className="p-4 rounded-full bg-white shadow-2xl"> {/* This div is the white frame with shadow */}
          <div className="p-4 rounded-full shadow-xl max-w-xs mx-auto custom_gradient text-center flex flex-col items-center justify-center h-64 w-64"> {/* Adjusted padding and dimensions */}
            <h2 className="mb-1 font-bold">Meeting ID: 898 7035 8408</h2>
            <p className="font-bold mb-1"><strong>Password:</strong> NASA</p> 
            <p className="text-sm font-bold">
              Mon, Tues, Thurs, & Saturday<br />
              Noon GMT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingInfo;
