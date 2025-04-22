# Testing TAI and leap seconds

```sh
timedatectl timesync-status
timedatectl show-timesync
timedatectl set-ntp false
timedatectl set-timezone UTC
timedatectl set-time '2016-12-31 23:59'
timedatectl show
cargo r --example tai --release
```

```
---
Epoch: 2016-12-31T23:59:23.182273915 UTC
Epoch TAI seconds: 3692217599.182274
Epoch seconds: 1483228763.1822739
Epoch UNIX: 1483228763.1822739
Leap seconds: 36
Time crate: 2016-12-31 23:59:23.182279153 +00
Time crate UNIX: 1483228763
Sys time seconds: 1483228763
---
Epoch: 2016-12-31T23:59:23.682598273 UTC
Epoch TAI seconds: 3692217599.682598
Epoch seconds: 1483228763.6825984
Epoch UNIX: 1483228763.6825984
Leap seconds: 36 <<<
Time crate: 2016-12-31 23:59:23.682605493 +00
Time crate UNIX: 1483228763
Sys time seconds: 1483228763
---
Epoch: 2016-12-31T23:59:24.182955732 UTC
Epoch TAI seconds: 3692217600.1829557
Epoch seconds: 1483228764.1829557
Epoch UNIX: 1483228764.1829557
Leap seconds: 37 <<<
Time crate: 2016-12-31 23:59:24.182961067 +00
Time crate UNIX: 1483228764
Sys time seconds: 1483228764
---
Epoch: 2016-12-31T23:59:24.683295794 UTC
Epoch TAI seconds: 3692217600.6832957
Epoch seconds: 1483228764.6832957
Epoch UNIX: 1483228764.6832957
Leap seconds: 37
Time crate: 2016-12-31 23:59:24.683300725 +00
Time crate UNIX: 1483228764
Sys time seconds: 1483228764
---
Epoch: 2016-12-31T23:59:25.183612336 UTC
Epoch TAI seconds: 3692217601.1836123
Epoch seconds: 1483228765.1836123
Epoch UNIX: 1483228765.1836123
Leap seconds: 37
Time crate: 2016-12-31 23:59:25.18361758 +00
Time crate UNIX: 1483228765
Sys time seconds: 1483228765
---
Epoch: 2016-12-31T23:59:25.683884343 UTC
Epoch TAI seconds: 3692217601.683884
Epoch seconds: 1483228765.6838844
Epoch UNIX: 1483228765.6838844
Leap seconds: 37
Time crate: 2016-12-31 23:59:25.683889643 +00
Time crate UNIX: 1483228765
Sys time seconds: 1483228765
```

```
---
Epoch: 2016-12-31T23:59:59.087198257 UTC
Epoch TAI seconds: 3692217635.0871983
Epoch seconds: 1483228799.0871983
Epoch UNIX: 1483228799.0871983
Leap seconds: 37
Time crate: 2016-12-31 23:59:59.087203599 +00
Time crate UNIX: 1483228799
Sys time seconds: 1483228799
---
Epoch: 2016-12-31T23:59:59.587516322 UTC
Epoch TAI seconds: 3692217635.5875163 <<<
Epoch seconds: 1483228799.5875163
Epoch UNIX: 1483228799.5875163
Leap seconds: 37
Time crate: 2016-12-31 23:59:59.587521638 +00
Time crate UNIX: 1483228799
Sys time seconds: 1483228799
---
Epoch: 2017-01-01T00:00:00.087827603 UTC
Epoch TAI seconds: 3692217637.0878277 <<<
Epoch seconds: 1483228800.0878277
Epoch UNIX: 1483228800.0878277
Leap seconds: 37
Time crate: 2017-01-01 0:00:00.087849067 +00
Time crate UNIX: 1483228800
Sys time seconds: 1483228800
---
Epoch: 2017-01-01T00:00:00.588095846 UTC
Epoch TAI seconds: 3692217637.5880957
Epoch seconds: 1483228800.588096
Epoch UNIX: 1483228800.588096
Leap seconds: 37
Time crate: 2017-01-01 0:00:00.588101332 +00
Time crate UNIX: 1483228800
Sys time seconds: 1483228800
---
Epoch: 2017-01-01T00:00:01.088391903 UTC
Epoch TAI seconds: 3692217638.088392
Epoch seconds: 1483228801.088392
Epoch UNIX: 1483228801.088392
Leap seconds: 37
Time crate: 2017-01-01 0:00:01.088397448 +00
Time crate UNIX: 1483228801
Sys time seconds: 1483228801
---
Epoch: 2017-01-01T00:00:01.588691528 UTC
Epoch TAI seconds: 3692217638.5886917
Epoch seconds: 1483228801.5886915
Epoch UNIX: 1483228801.5886915
Leap seconds: 37
Time crate: 2017-01-01 0:00:01.588697013 +00
Time crate UNIX: 1483228801
Sys time seconds: 1483228801
---
Epoch: 2017-01-01T00:00:02.089005138 UTC
Epoch TAI seconds: 3692217639.089005
Epoch seconds: 1483228802.0890052
Epoch UNIX: 1483228802.0890052
Leap seconds: 37
Time crate: 2017-01-01 0:00:02.089010488 +00
Time crate UNIX: 1483228802
Sys time seconds: 1483228802
```

Can't really test with NTP tho but that's unfortunate because leap seconds are corrected by NTP servers (I think so or some appropriate local daemon handling leap seconds).
