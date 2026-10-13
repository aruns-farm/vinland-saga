---
title: Time, Clocks, and the Ordering of Events in a Distributed System
authors: Leslie Lamport
year: 1978
venue: CACM
topic: Distributed systems
idea: Defines “happened before” and logical clocks — a way to order events without a shared physical clock.
citation: "Leslie Lamport. *Communications of the ACM* 21(7), July 1978, pp. 558–565."
minutes: 10
summary: Without a shared clock, “which event happened first” is only partly answerable. Lamport defines the order we *can* know — happened-before — then gives each process a simple counter that respects it, and shows how that is enough to build a total order and solve mutual exclusion.
takeaway: "[Your own takeaway — where you've seen this at work: event ordering in a queue, conflict resolution, debugging logs across services.]"
terms:
  - { term: "happened-before (→)", meaning: "The causal order between events." }
  - { term: concurrent, meaning: "Neither event happened before the other." }
  - { term: clock condition, meaning: "a → b implies C(a) < C(b). Not the reverse." }
next: [dynamo, spanner]
essay: reading-ddia-replication
---

## Happened-before is a partial order

Event *a* happened before *b* if they are in the same process and *a* came first, or if *a* sends a message that *b* receives — and the relation is transitive. When neither event happened before the other, they are concurrent. Nothing more can be said about them without extra information.

## Logical clocks

Each process keeps a counter. The clock condition asks only one thing: if *a* happened before *b*, then *a*'s timestamp is smaller. Two rules achieve it — tick between local events, and on receiving a message, jump past the timestamp it carries.

```js
class LamportClock {
  t = 0;
  tick()      { return ++this.t; }          // rule 1: local event
  send()      { return this.tick(); }       // stamp outgoing message
  receive(tm) {                             // rule 2: on receipt
    this.t = Math.max(this.t, tm) + 1;
    return this.t;
  }
}
```

<p class="caption">My sketch of the two implementation rules — not code from the paper.</p>

## From partial to total order

Break ties between equal timestamps with any fixed ordering of processes, and every event gets a place in one total order. The paper uses it to build a mutual-exclusion algorithm where every process grants the resource in timestamp order — no central coordinator.

## When logical time isn't enough

If causality flows outside the system — a phone call between two users — logical clocks can't see it. Lamport closes with physical clocks that are kept within known bounds of each other, so the ordering can respect real-world cause and effect too.
