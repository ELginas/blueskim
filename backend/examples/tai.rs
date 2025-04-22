use std::{
    thread::sleep,
    time::{Duration, SystemTime, UNIX_EPOCH},
};

use hifitime::{Epoch, TimeScale, Unit};
use time::UtcDateTime;

fn main() {
    for _ in 0..200 {
        let time = Epoch::now().unwrap();
        let sys_time = SystemTime::now();
        let time_crate = UtcDateTime::now();
        println!("---");
        println!("Epoch: {time}");
        println!(
            "Epoch TAI seconds: {}",
            time.to_time_scale(TimeScale::TAI).duration.to_seconds()
        );
        println!("Epoch seconds: {}", time.to_unix_seconds());
        println!("Epoch UNIX: {}", time.to_unix(Unit::Second));
        println!("Leap seconds: {}", time.leap_seconds_iers());
        println!("Time crate: {time_crate}");
        println!("Time crate UNIX: {}", time_crate.unix_timestamp());
        let sys_time_seconds = sys_time.duration_since(UNIX_EPOCH).unwrap().as_secs();
        println!("Sys time seconds: {}", sys_time_seconds);
        sleep(Duration::from_millis(500));
    }
}
