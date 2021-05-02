import React from "react";
import { Waypoint } from "react-waypoint";

// Should figure out correct types for next line
export const CallWaypoint: any = ({
  indexProp,
  listProp,
  next,
  fnProps,
}: any) => {
  return (
    <div>
      {indexProp === listProp.length - 3 && (
        <Waypoint
          onEnter={() => {
            if (next !== null) {
              fnProps();
            }
          }}
        ></Waypoint>
      )}
    </div>
  );
};
