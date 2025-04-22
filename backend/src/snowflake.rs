use hifitime::{Epoch, TimeScale};
use lazy_static::lazy_static;

lazy_static! {
    static ref SNOWFLAKE_EPOCH: Epoch = Epoch::from_gregorian_utc_at_midnight(2015, 1, 1);
}

/// Internally datetime uses TAI instead of UTC to support leap seconds. Only tested on surface level but not thoroughly.
///
/// Storing 30 year old timestamp in nanoseconds would require 60 bits, microseconds - 50 bits, milliseconds - 40 bits, seconds - 30 bits, minutes - 24 bits.
/// It would be great to create snowflakes in parallel, so unique worker/thread ID would need to be stored. If timestamp is stored in nanoseconds,
/// timestamp uniqueness is practically guaranteed for that worker/thread. That could be reality, almost, because storing 30 year old timestamp in
/// nanoseconds would require 60 bits but leaving only 16 workers for the future is a bit too little. Storing same timestamp in microseconds would
/// require 50 bits, leaving 14 bits for uniqueness between workers and inside worker itself. Not sure how but maybe granular timing could help with
/// timing attacks and less granular timestamp would be desirable. Maybe fitting an ID into 32 bits is realistic by storing minute timestamps but that would
/// leave only 256 unique IDs per minute. This is realistic to hit on a busy channel. Also, for reference, steady 1 billion messages/month would be ~23.1k messages/minute.
///
/// Actually if ID size is concern, incremental IDs are way superior because in arrays IDs don't even need to be stored and they are as small as they can be
/// and timestamps can be sent as message delimiters with delta to the previous timestamp.
pub struct Snowflake(u64);

impl Snowflake {
    pub fn now() {
        let time = Epoch::now().unwrap();
        let seconds = time.to_time_scale(TimeScale::TAI).duration.to_seconds();
        let normal_seconds = time.to_tai_seconds();
        assert_eq!(seconds, normal_seconds);
        let discord_seconds = (time - *SNOWFLAKE_EPOCH).to_seconds();
        let discord_nanoseconds = (time - *SNOWFLAKE_EPOCH).total_nanoseconds() / 1_000_000_000;
        dbg!(discord_seconds);
        dbg!(normal_seconds);
        dbg!(discord_nanoseconds);

        let thirty_years = Epoch::from_gregorian_utc_at_midnight(2045, 1, 1);
        let thirty_nanoseconds =
            (thirty_years - *SNOWFLAKE_EPOCH).total_nanoseconds() / 1_000_000_000 / 60;
        dbg!(thirty_nanoseconds);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        let snowflake = Snowflake::now();
    }
}
