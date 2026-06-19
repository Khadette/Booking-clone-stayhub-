import { Users } from 'lucide-react';

export default function RoomTypesTable({ roomTypes, onReserve }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold text-ink">Room types</h2>
      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="hidden bg-gray-50 sm:table-header-group">
            <tr>
              <th className="px-4 py-3 font-semibold text-ink-soft">Room</th>
              <th className="px-4 py-3 font-semibold text-ink-soft">Capacity</th>
              <th className="px-4 py-3 font-semibold text-ink-soft">Price / night</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {roomTypes.map((room) => (
              <tr key={room.name} className="flex flex-col gap-2 p-4 sm:table-row sm:p-0">
                <td className="font-medium text-ink sm:px-4 sm:py-3">{room.name}</td>
                <td className="flex items-center gap-1.5 text-ink-soft sm:px-4 sm:py-3">
                  <Users className="h-3.5 w-3.5 sm:hidden" /> Up to {room.capacity} guests
                </td>
                <td className="font-semibold text-ink sm:px-4 sm:py-3">${room.price}</td>
                <td className="sm:px-4 sm:py-3">
                  <button
                    onClick={() => onReserve?.(room)}
                    className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light focus-ring sm:w-auto"
                  >
                    Reserve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
