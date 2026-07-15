'use client';

import { useState } from 'react';
import { Calendar, Users, Star, Share2, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Property } from '@/lib/dummy-data';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { CreditCard, Loader2, CheckCircle2 } from 'lucide-react';

interface BookingSidebarProps {
  property: Property;
}

export function BookingSidebar({ property }: BookingSidebarProps) {
  const [guests, setGuests] = useState(1);
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const router = useRouter();

  // Checkout states
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form input states
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardName.trim() || !cardNumber.trim() || !cardExpiry.trim() || !cardCvv.trim()) {
      alert("Please fill in all payment details.");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      try {
        const storedBookings = localStorage.getItem('havenly-bookings');
        const bookingsList = storedBookings ? JSON.parse(storedBookings) : [];
        const newBooking = {
          id: `book-${Date.now()}`,
          propertyId: property.id,
          guestId: 'guest-local',
          checkIn: new Date(checkIn),
          checkOut: new Date(checkOut),
          guests: guests,
          totalPrice: totalPrice + 50,
          status: 'confirmed',
          createdAt: new Date()
        };
        bookingsList.push(newBooking);
        localStorage.setItem('havenly-bookings', JSON.stringify(bookingsList));
      } catch (err) {
        console.error('Failed to save booking:', err);
      }

      setTimeout(() => {
        setCheckoutOpen(false);
        setIsSuccess(false);
        setCardName('');
        setCardNumber('');
        setCardExpiry('');
        setCardCvv('');
        toast({
          title: "Reservation Successful!",
          description: `Your stay at ${property.title} has been booked.`,
        });
        router.push('/dashboard');
      }, 2000);
    }, 2000);
  };

  const today = new Date().toISOString().split('T')[0];

  const minCheckOut = checkIn
    ? new Date(new Date(checkIn).getTime() + 86_400_000).toISOString().split('T')[0]
    : today;

  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const isInvalidRange = Boolean(checkIn && checkOut && nights <= 0);

  const totalPrice = nights * property.pricePerNight;

  return (
    <Card className="p-6 border-border sticky top-24 space-y-6">
      {/* Price Header */}
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">
            ${property.pricePerNight}
          </span>
          <span className="text-muted-foreground">per night</span>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <Star size={16} className="fill-foreground text-foreground" />
          <span className="font-semibold text-foreground">
            {property.rating.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">
            ({property.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="space-y-4">
        {/* Check-in Date */}
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            Check-in
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
            <Calendar size={18} className="text-muted-foreground" />
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && checkOut <= e.target.value) {
                  setCheckOut('');
                }
              }}
              className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            Check-out
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
            <Calendar size={18} className="text-muted-foreground" />
            <input
              type="date"
              value={checkOut}
              min={minCheckOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          {isInvalidRange && (
            <p className="mt-1 text-xs text-red-500">
              Check-out must be after check-in.
            </p>
          )}
        </div>

        {/* Guests */}
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            Guests
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
            <Users size={18} className="text-muted-foreground" />
            <input
              type="number"
              min="1"
              max={property.capacity.guests}
              value={guests}
              onChange={(e) =>
                setGuests(
                  Math.min(
                    property.capacity.guests,
                    Math.max(1, parseInt(e.target.value) || 1)
                  )
                )
              }
              className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Maximum {property.capacity.guests} guests
          </p>
        </div>
      </div>

      {/* Reserve Button */}
      <Button
        onClick={() => setCheckoutOpen(true)}
        className="w-full bg-primary text-primary-foreground py-3 text-base font-semibold hover:opacity-90 transition cursor-pointer"
        disabled={isInvalidRange || !checkIn || !checkOut || nights <= 0}
      >
        Reserve
      </Button>

      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-lg p-6 border-border">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold text-foreground">Secure Checkout</DialogTitle>
          </DialogHeader>

          {isProcessing ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-sm font-medium text-muted-foreground">Processing your secure payment...</p>
            </div>
          ) : isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <CheckCircle2 className="h-12 w-12 text-green-500 animate-bounce" />
              <h3 className="text-lg font-bold text-foreground">Payment Successful!</h3>
              <p className="text-sm text-muted-foreground text-center">
                Your reservation at <strong>{property.title}</strong> is confirmed. Redirecting to your dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              {/* Trip Summary */}
              <div className="rounded-xl border border-border p-4 bg-muted/30 space-y-2">
                <h4 className="font-semibold text-foreground text-sm">Trip Summary</h4>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Stay duration</span>
                  <span>{nights} nights ({checkIn} to {checkOut})</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Guests count</span>
                  <span>{guests} guest{guests > 1 ? 's' : ''}</span>
                </div>
                <div className="border-t border-border my-2 pt-2 flex justify-between text-sm font-bold text-foreground">
                  <span>Total (inc. fees)</span>
                  <span>${totalPrice + 50}</span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                  <CreditCard size={18} /> Payment Information
                </h4>
                
                <div className="space-y-2">
                  <Label htmlFor="card-name" className="text-xs">Cardholder Name</Label>
                  <Input
                    id="card-name"
                    required
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    className="h-10 animate-fade-in"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-number" className="text-xs">Card Number</Label>
                  <Input
                    id="card-number"
                    required
                    value={cardNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').substring(0, 16);
                      const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
                      setCardNumber(formatted);
                    }}
                    placeholder="4111 2222 3333 4444"
                    className="h-10"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-expiry" className="text-xs">Expiration Date</Label>
                    <Input
                      id="card-expiry"
                      required
                      value={cardExpiry}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').substring(0, 4);
                        const formatted = val.length >= 2 ? `${val.substring(0, 2)}/${val.substring(2)}` : val;
                        setCardExpiry(formatted);
                      }}
                      placeholder="MM/YY"
                      className="h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-cvv" className="text-xs">CVV</Label>
                    <Input
                      id="card-cvv"
                      required
                      value={cardCvv}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').substring(0, 3);
                        setCardCvv(val);
                      }}
                      placeholder="123"
                      type="password"
                      className="h-10"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg"
              >
                Pay & Confirm Stay
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Price Breakdown */}
      {nights > 0 && !isInvalidRange && (
        <div className="space-y-2 border-t border-border pt-6 text-sm">
          <div className="flex justify-between">
            <span className="text-foreground">
              ${property.pricePerNight} × {nights} nights
            </span>
            <span className="font-semibold text-foreground">
              ${property.pricePerNight * nights}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground">Cleaning fee</span>
            <span className="font-semibold text-foreground">$50</span>
          </div>
          <div className="flex justify-between border-t border-border pt-2">
            <span className="font-semibold text-foreground">Total</span>
            <span className="font-bold text-foreground">${totalPrice + 50}</span>
          </div>
        </div>
      )}

      {/* Share and Save */}
      <div className="flex gap-3 border-t border-border pt-6">
        <Button
          variant="outline"
          className="flex-1"
          size="sm"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({ title: 'Link copied to clipboard!' });
          }}
        >
          <Share2 size={16} className="mr-2" />
          Share
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => setIsSaved(!isSaved)}
        >
          <Heart
            size={16}
            className={`mr-2 ${isSaved ? 'fill-red-500 text-red-500' : ''}`}
          />
          Save
        </Button>
      </div>
    </Card>
  );
}
