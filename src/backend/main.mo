import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type WaitlistEntry = {
    name : Text;
    email : Text;
    city : Text;
    creatorType : Text;
    timestamp : Time.Time;
  };

  let waitlist = Map.empty<Text, WaitlistEntry>();

  public shared ({ caller }) func submitEntry(name : Text, email : Text, city : Text, creatorType : Text) : async () {
    switch (waitlist.get(email)) {
      case (?_) { Runtime.trap("This email is already registered.") };
      case (null) {
        let entry : WaitlistEntry = {
          name;
          email;
          city;
          creatorType;
          timestamp = Time.now();
        };
        waitlist.add(email, entry);
      };
    };
  };

  public query ({ caller }) func getTotalSignups() : async Nat {
    waitlist.size();
  };
};
