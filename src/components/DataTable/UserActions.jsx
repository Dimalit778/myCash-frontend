import { CircularProgress, Fab } from '@mui/material';
import React, { useState } from 'react';
import { Check, Delete, Edit } from '@mui/icons-material';
import { green } from '@mui/material/colors';
const UserActions = ({ params, rowId, setRowId }) => {
  const [loading, setLodaing] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSumbit = () => {};

  return (
    <div className=" d-flex gap-3 p-5  ">
      <div>
        {success ? (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: green[500],
              '&hover': { bgcolor: green[700] },
            }}
          >
            <Check />
          </Fab>
        ) : (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
            }}
            // disabled={params.id !== rowId || loading}
            onClick={handleSumbit}
          >
            <Edit />
          </Fab>
        )}
        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -1,
              zIndex: 1,
            }}
          />
        )}
      </div>
      <div>
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          // disabled={params.id !== rowId || loading}
          onClick={handleSumbit}
        >
          <Delete />
        </Fab>
      </div>
    </div>
  );
};

export default UserActions;
