import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo() {
  return (
    <div className='flex justify-start mt-10 items-start gap-2 flex-col w-[100%] h-100vh'> 
    
       <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Typography variant="h2" width="100%" > <Skeleton /> </Typography>
        </Box>
      
    <Box sx={{display:'flex',width:'100%',alignItems:'flex-start',justifyContent:'flex-start',gap:'10px'}}>
    <Skeleton variant="rectangular" width={150} height={80} />
        <Skeleton variant="rectangular" width="70%">
          <div style={{ paddingTop: '30%' }} />
        </Skeleton>
        </Box>
        <Typography variant="h5" width="15%" > <Skeleton /> </Typography>
    </div>
  );
}

export default function SkeletonModal() {
  return (
     <>
     <div className='flex flex-wrap w-[65%] px-16'>
        <SkeletonChildrenDemo />
        <SkeletonChildrenDemo />
        </div>
        </>
  );
}
