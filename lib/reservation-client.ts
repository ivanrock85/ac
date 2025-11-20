export type ReservationPayload = {
  type: string;
  name: string;
  phone: string;
  summary?: string;
  details?: Record<string, any>;
};

// Assuming ReservationData is defined elsewhere or needs to be inferred from the usage.
// Based on the mapping, ReservationData would look something like this:
export type ReservationData = {
  type: string;
  name: string;
  phone: string;
  summary?: string;
  details?: {
    people?: string | number;
    origin?: string;
    destination?: string;
    date?: string;
    start_time?: string;
    end_time?: string;
    notes?: string;
    [key: string]: any; // Allow other properties in details
  };
};

export async function submitReservation(data: ReservationData): Promise<void> {
  // Map the client data structure to the API schema if necessary
  // The client data structure is slightly different (nested details), so we flatten it.

  const payload = {
    type: data.type,
    name: data.name,
    phone: data.phone,
    summary: data.summary,
    // Flatten details
    peopleCount: data.details?.people,
    origin: data.details?.origin,
    destination: data.details?.destination, // or route
    startDate: data.details?.date || data.details?.start_time,
    endDate: data.details?.end_time,
    notes: data.details?.notes,
  };

  const response = await fetch("/api/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "提交失败");
  }

  // Success
  return;
}
