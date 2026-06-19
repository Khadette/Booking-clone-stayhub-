import { CalendarCheck, MessageSquareHeart, Globe2, Headset } from 'lucide-react';

const POINTS = [
  {
    icon: CalendarCheck,
    title: 'Book now, pay at the property',
    body: 'Free cancellation on most rooms',
  },
  {
    icon: MessageSquareHeart,
    title: '50,000+ reviews from fellow travellers',
    body: 'Get trusted information from guests like you',
  },
  {
    icon: Globe2,
    title: 'Properties across Rwanda and beyond',
    body: 'Hotels, guesthouses, apartments, and more',
  },
  {
    icon: Headset,
    title: 'Trusted customer service you can rely on',
    body: "We're here to help, every day",
  },
];

export default function WhyStayHub() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Why StayHub?</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-lg bg-gray-50 p-4">
            <Icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
            <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-xs text-ink-muted">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
