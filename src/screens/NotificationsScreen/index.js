import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {AppColors} from '../../constants/ColorSkin';
import moment from 'moment';
import AppSvg from '../../components/AppSvg';
import {AppIcons} from '../../constants/AppIcons';
import {AppDimentions} from '../../constants/constants';
import TextStyle from '../../constants/TextStyle';

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
};
// LocaleConfig.defaultLocale = 'en';

const NotificationsScreen = () => {
  const [selected, setSelected] = useState('');
  const [dateNow, setDateNow] = useState('');

  // Initial Current Date
  useEffect(() => {
    const now = moment().format('YYYY-MM-DD');
    setDateNow(now);
  }, []);

  const _renderDayTitle = title => (
    <View
      style={{
        width: `${100 / 7}%`,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{...TextStyle.title.t_3, color: AppColors.typography.secondary}}>
        {title}
      </Text>
    </View>
  );

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: AppDimentions.secondPadding,
          backgroundColor: 'white',
        }}>
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
          <Text
            style={{...TextStyle.title.t_2, color: AppColors.typography.title}}>
            {`${moment(dateNow).format('MMMM')} ${moment(dateNow).format(
              'yyyy',
            )}`}
          </Text>
          <TouchableOpacity style={{height: 20, width: 20, marginLeft: 4}}>
            <AppSvg svgSrc={AppIcons.arrow_calendar_down} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 48,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 32,
              marginRight: AppDimentions.mainPadding,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              const now = moment(dateNow).format('YYYY-MM-DD');
              const dateNextMonth = moment(now)
                .subtract(1, 'month')
                .format('YYYY-MM-DD');
              setDateNow(dateNextMonth);
            }}>
            <AppSvg svgSrc={AppIcons.arrow_calendar_left} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              const now = moment(dateNow).format('YYYY-MM-DD');
              const dateNextMonth = moment(now)
                .add(1, 'month')
                .format('YYYY-MM-DD');
              setDateNow(dateNextMonth);
            }}>
            <AppSvg svgSrc={AppIcons.arrow_calendar_right} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          paddingHorizontal: 5,
        }}>
        {_renderDayTitle('Mon')}
        {_renderDayTitle('Tue')}
        {_renderDayTitle('Wed')}
        {_renderDayTitle('Thu')}
        {_renderDayTitle('Fri')}
        {_renderDayTitle('Sat')}
        {_renderDayTitle('Sun')}
      </View>
      <Calendar
        key={dateNow}
        style={{}}
        enableSwipeMonths
        firstDay={1}
        onMonthChange={date => {
          const converted = moment(date.dateString).format();
          setDateNow(converted);
        }}
        // Specify the current date
        current={dateNow}
        // Callback that gets called when the user selects a day
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        // Mark specific dates as marked
        markedDates={{
          [selected]: {
            selected: true,
            marked: true,
            selectedColor: AppColors.primary,
          },
        }}
        headerStyle={{display: 'none'}}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: AppColors.typography.title,
          textDisabledColor: AppColors.typography.disable,
          textDayFontSize: TextStyle.body.b_2.fontSize,
          textDayFontFamily: TextStyle.body.b_2.fontFamily,
          textDayFontWeight: TextStyle.body.b_2.fontWeight,
        }}
      />
    </View>
  );
};

export default NotificationsScreen;
