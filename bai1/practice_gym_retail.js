let orderCode = "";
let isValidOrder = false;

do {
    console.log(`
        FITNESS GYM - MENU
1. Nhập và chuẩn hóa mã đơn hàng
2. Tính tiền và in hóa đơn
3. Thoát chương trình
`);

    const choice = prompt("Nhập lựa chọn: ").trim();

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng (VD: GYM-SHAKER-GLOVES-VIP): ").trim().toUpperCase();
            if (orderCode.startsWith("GYM-") && orderCode.length >= 8) {
                isValidOrder = true;

                console.log("\nMã đơn hàng hợp lệ:");
                console.log(orderCode);
            } else {
                isValidOrder = false;

                console.log("\nMã đơn hàng không hợp lệ!");
                console.log("Mã phải bắt đầu bằng GYM- và có ít nhất 8 ký tự.");
            }
            break;

        case "2":
            if (!isValidOrder) {
                console.log("\nVui lòng nhập mã đơn hàng hợp lệ trước!");
                break;
            }

            const parts = orderCode.split("-");
            let total = 0;
            let receipt = "";

            for (let i = 1; i < parts.length; i++) {
                const item = parts[i];
                if (item === "VIP") {
                    continue;
                }

                let price = 0;
                let itemName = "";

                switch (item) {
                    case "SHAKER":
                        itemName = "Bình lắc";
                        price = 120000;
                        break;

                    case "GLOVES":
                        itemName = "Găng tay";
                        price = 180000;
                        break;

                    case "STRAP":
                        itemName = "Dây kéo lưng";
                        price = 150000;
                        break;

                    default:
                        itemName = "Sản phẩm không hợp lệ";
                        price = 0;
                }

                if (price > 0) {
                    total += price;

                    receipt +=
                        itemName.padEnd(20) +
                        price.toLocaleString("vi-VN").padStart(12) +
                        " VNĐ\n";
                }
            }

            const isVIP = orderCode.includes("VIP");
            const discount = isVIP ? total * 0.1 : 0;
            const finalTotal = total - discount;
            const border = "-".repeat(40);

            console.log(`
${border}
        HÓA ĐƠN GYM
${border}
Mã đơn hàng: ${orderCode}

Sản phẩm${" ".repeat(12)}Thành tiền
${border}
${receipt}${border}
Tạm tính:${total.toLocaleString("vi-VN").padStart(25)} VNĐ
Giảm VIP:${discount.toLocaleString("vi-VN").padStart(24)} VNĐ
Thanh toán:${finalTotal.toLocaleString("vi-VN").padStart(21)} VNĐ
${border}
`);
            break;

        case "3":
            console.log("\nĐã thoát chương trình.");
            break;

        default:
            console.log("\nLựa chọn không hợp lệ!");
            console.log("Vui lòng chọn 1, 2 hoặc 3.");
    }

} while (true);