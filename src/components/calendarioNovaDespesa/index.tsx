import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

interface CustomCalendarProps {
  closeCalendar: () => void;
  selectDate: (date: string) => void;
}

export default function CustomCalendar({
  closeCalendar,
  selectDate,
}: CustomCalendarProps) {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <View className="bg-white p-2 rounded-lg elevation w-full mt-4">
      <Calendar
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#5DCAA5",
          },
        }}
        monthFormat="MMMM"
        showSixWeeks
        initialDate=""
        onDayPress={(day) => {
          setSelectedDate(day.dateString);

          let formatedDate = `${day.year}-${day.month}-${day.day}`;
          selectDate(formatedDate);
        }}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => closeCalendar()}
        className="py-1 px-3 border-2 border-red-500 self-start rounded-lg mt-2"
      >
        <Text className="text-red-500 font-bold text-base">Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
