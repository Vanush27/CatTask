import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { View } from 'react-native';

const StarRating = ({ activeStars }: { activeStars: number }) => {
  const totalStars = 5;

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
      {[...new Array(totalStars)].map((arr, index) =>
        index < activeStars ? <StarIcon /> : <StarBorderIcon />
      )}
    </View>
  );
};

export default StarRating;
