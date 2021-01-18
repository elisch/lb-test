import {StyleSheet} from 'react-native';
import {commonStyles, colors} from '../../assets/styles/common.styles';

const styles = StyleSheet.create({
  ad: {
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 24,
    ...commonStyles.shadow,
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default styles;
