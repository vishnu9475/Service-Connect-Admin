const bookinglist = [
  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },

  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },

  {
    title: "Bulb change",
    user: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    image: "https://i.pravatar.cc/100?img=12",
  },
];

const BookingList = () => {
  return (
    <div className="px-7  md:px-10 lg:px-10 -mt-1">
      <div className="bg-white rounded-2xl shadow-md p-4 my-4  mx-auto">
        {/* Header */}
        <h3 className="font-semibold text-gray-800 mb-4">Booking</h3>

        {/* List */}
        <div className="space-y-3">
          {bookinglist.map((item, index) => (
            <div
              key={index}
              className="bg-gray-600 text-white rounded-xl p-3 flex items-center justify-between shadow-sm"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt="service"
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs opacity-90">{item.user}</p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right text-xs opacity-90">
                <p>{item.time}</p>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
