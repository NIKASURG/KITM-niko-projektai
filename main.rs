fn main() {
    let kiek_reike = 10_i64.pow(6);
    let mut pirminei: Vec<String> = vec!["2".to_string()];

    for i in 3..kiek_reike {
        if i % 2 == 0 {
            continue;
        }

        let mut sulusk = false;

        for j in &pirminei {
            let j_num: i64 = j.parse().unwrap();
            if j_num > (i as f64).sqrt() as i64 {
                break;
            }
            if i % j_num == 0 {
                sulusk = true;
                break;
            }
        }

        if !sulusk {
            pirminei.push(i.to_string());
        }
    }

    let temp = pirminei.clone();
    println!("{:?}", pirminei);
}