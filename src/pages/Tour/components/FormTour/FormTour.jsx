import { Button, Form, Input } from "antd";
import { createTour, editTour } from "../../../../store/features/tour/tourSlice";
import CkeditorTour from "../../../../components/Ckeditor/CkeditorTour";

export default function FormTour({ category, dispatch, form, action }) {
  const onFinish = (values) => {
    if(action){
        console.log(values)
        dispatch(createTour(values))
    }else{
        const data = {
            id:values._id,
            body:{
                brief: values.brief,
                content: values.content,
                description: values.description,
                price: values.price,
                title: values.title
            }
        }
        console.log(data)
        dispatch(editTour(data))
    }
    
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {action ? null : (
          <Form.Item name="_id" label="id" wrapperCol={{ span: 8 }}>
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item name="title" label="title" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="price" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="brief" label="brief" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          wrapperCol={{ span: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item name="content" label="content">
          <CkeditorTour />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 8 }}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <div>
            <div dangerouslySetInnerHTML={{ __html: "<p>hello</p>" }} />
          </div>
          {/* <div dangerouslySetInnerHTML={{
            __html: "<h1>Long data</h1><p style=\"margin-left:0px;\"><a href=\"https://didongviet.vn/dien-thoai/iphone-15-pro-max.html\"><strong>iPhone 15 Pro Max</strong></a><strong> giá ưu đãi - nhiều khuyến mãi sốc số lượng có hạn tại Di Động Việt</strong></p><h2 style=\"margin-left:0px;\"><strong>iPhone 14 Pro Max 128GB - chiếc iPhone gây bất ngờ với nhiều tính năng mới lạ</strong></h2><p style=\"margin-left:0px;\"><a href=\"https://didongviet.vn/iphone-14.html\"><i><strong>iPhone 14 Pro Max</strong></i></a><i><strong> </strong></i>được xem là chiếc iPhone đáng mua nhất trong năm trong năm 2022 vì có thể đáp ứng tốt hầu hết mọi nhu cầu của người dùng từ cơ bản đến nâng cao. Với sự nâng cấp mạnh mẽ về mặt phần cứng với camera lên đến 48MP, bộ nhớ trong 1TB, màn hình thiết kế mới hứa hẹn sẽ mang lại trải nghiệm vô cùng tuyệt vời đến người dùng.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950246815_1_iphone_14_pro_max_didongviet.jpg\" alt=\"iPhone 14 Pro Max 128GB - chiếc iPhone gây bất ngờ với nhiều tính năng mới lạ\"></figure><h3 style=\"margin-left:0px;\"><strong>Hình ảnh sắc nét - trải nghiệm mượt mà với tần số quét 120Hz</strong></h3><p style=\"margin-left:0px;\">Màn hình iPhone <a href=\"https://didongviet.vn/iphone-14-pro-max-128gb.html\"><i><strong>14 Pro Max 128GB</strong></i></a> được Apple thay đổi hoàn toàn với phần viền màn hình được làm mỏng đều ở 4 cạnh, đi kèm với phần notch được thiết kế hình giọt nước thay vì tai thỏ như trên các phiên bản tiền nhiệm. Sự thay đổi này mang lại cho người dùng trải nghiệm hình ảnh tốt hơn, không gian rộng rãi hơn cũng như “sexy” hơn khi so với các dòng flagship khác.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950287004_2_iphone_14_pro_max_didongviet.jpg\" alt=\"Hình ảnh sắc nét - trải nghiệm mượt mà với tần số quét 120Hz\"></figure><p style=\"margin-left:0px;\">Chiếc máy vẫn sẽ được trang bị tấm nền OLED với kích thước 6.7 inch độ phân giải 1290 x 2796 pixels, hỗ trợ dải màu rộng P3 mang lại hình ảnh vô cùng sắc nét, màu sắc chân thực khiến người dùng phải choáng ngợp. Đi cùng với đó là độ tương phản cao giúp các chi tiết trên ảnh / video càng trở nên tự nhiên, sống động cuốn hút mọi ánh nhìn.</p><p style=\"margin-left:0px;\">Màn hình Super Retina XDR trên chiếc smartphone này&nbsp;còn sở hữu độ sáng cao lên đến 1600 nits (HDR) sẽ giúp người dùng có thể sử dụng ở mọi điều kiện ánh sáng khác nhau từ trong nhà, bóng râm, trời nắng gắt … mà không bị giảm chất lượng hiển thị.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950310302_3_iphone_14_pro_max_didongviet.jpg\" alt=\"Hình ảnh sắc nét - trải nghiệm mượt mà với tần số quét 120Hz\"></figure><p style=\"margin-left:0px;\">Một trong những nâng cấp đáng giá nhất trên iPhone 13 Pro đó là được trang bị màn hình 120Hz với công nghệ LTPO giúp màn hình tự điều chỉnh tần số quét từ 10Hz - 120Hz để tiết kiệm pin. Trên iPhone 14 Pro, Apple đã điều chỉnh nó xuống thấp hơn nữa là từ 1Hz - 120hz. Điều này giúp chiếc máy có thể tiết kiệm pin hơn nữa cũng như mang lại khả năng vuốt chạm mượt mà trong mọi ứng dụng / tác vụ mà người dùng sử dụng.</p><h3 style=\"margin-left:0px;\"><strong>Thỏa sức sáng tạo với cụm camera 48MP</strong></h3><p style=\"margin-left:0px;\">iPhone 14 Pro Max 128GB vẫn sẽ được trang bị cụm 3 camera gồm: camera góc rộng 48MP, camera góc siêu rộng 12MP và camera tele 12MP. Với cấu hình phần cứng khủng, chiếc máy sẽ mang lại cho người dùng nhiều bức ảnh chụp vô cùng tuyệt vời.</p><p style=\"margin-left:0px;\">Camera trên phiên bản này đã được Apple nâng cấp với độ phân giải 48MP thay vì 12MP trên các phiên bản tiền nhiệm. Đây là một sự cải tiến lớn vô cùng đáng giá kể từ thời iPhone 6 đến nay. Với độ phân giải cao hơn, chiếc máy hứa hẹn sẽ mang lại cho người dùng những bức ảnh chân thực, sắc nét giúp mọi người có thể thỏa sức sáng tạo mọi lúc, mọi nơi.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950327161_4_iphone_14_pro_max_didongviet.jpg\" alt=\"Thỏa sức sáng tạo với cụm camera 48MP\"></figure><p style=\"margin-left:0px;\">Bên cạnh những tính năng liên quan đến chụp ảnh, khả năng quay video vẫn là một trong những thế mạnh của iPhone từ xưa đến nay. Việc trang bị cảm biến lớn cùng độ phân giải cao, kết hợp với sự tối ưu từ phần mềm sẽ mang lại những thước phim đậm chất điện ảnh. Từ đó giúp người dùng có thể lưu trữ mọi khoảnh khắc đáng nhớ nhất trong mỗi hành trình, mỗi chuyến đi…</p><h3 style=\"margin-left:0px;\"><strong>Hiệu năng vượt trội với Apple A16 Bionic</strong></h3><p style=\"margin-left:0px;\">iPhone 14 Pro Max 128GB sở hữu hiệu năng mạnh mẽ từ con chip mới nhất của mình là Apple A16 Bionic. Đây là vi xử lý được sản xuất dựa trên tiến trình 4nm mới nhất với hơn 15 tỷ bóng bán dẫn mang lại hiệu năng mạnh mẽ nhưng vẫn đảm bảo tiết kiệm năng lượng cho chiếc máy. Theo Apple, A16 Bionic cho khả năng xử lý nhanh hơn 40% khi so với A15 Bionic trên iPhone 13 Pro, khả năng xử lý đồ họa cũng nhanh hơn 30%.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950340265_5_iphone_14_pro_max_didongviet.jpg\" alt=\"Hiệu năng vượt trội với Apple A16 Bionic\"></figure><p style=\"margin-left:0px;\">Với hiệu năng mạnh mẽ, iPhone 14 Pro Max 128GB chắc chắn sẽ mang lại trải nghiệm giải trí tuyệt vời cho người dùng. Cụ thể, người dùng có thể chơi tốt hầu hết các tựa game nặng trên thị trường hiện nay như: Genshin Impact, PUBG Mobile, Liên quân Mobile… ở mức thiết lập đồ họa cao nhất mà không gặp tình trạng bị drop FPS khi đang chơi, mang lại trải nghiệm giải trí hoàn hảo.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950350913_6_iphone_14_pro_max_didongviet.jpg\" alt=\"\"></figure><p style=\"margin-left:0px;\">Ngoài ra, với dung lượng bộ nhớ trong 128GB, mang lại không gian lưu trữ khổng lồ giúp người dùng thoải mái lưu trữ kho hình ảnh, video cá nhân, ứng dụng mà không cần lo lắng về tình trạng quá tải bộ nhớ. Tuy nhiên, đối với những người dùng cần bộ nhớ trong lớn hơn để phục vụ cho công việc thì có thể tham khảo qua mẫu <a href=\"https://didongviet.vn/iphone-14-pro-max-256gb.html\"><strong>iPhone 14 Pro Max 256GB</strong></a> này nhé.</p><h3 style=\"margin-left:0px;\"><strong>Thời lượng pin ấn tượng</strong></h3><p style=\"margin-left:0px;\">Nếu thời lượng pin trên iPhone 13 Pro Max&nbsp;đã khiến bạn hài lòng thì iPhone 14 Pro Max 128GB chắc chắn sẽ khiến bạn bất ngờ hơn vì thời lượng pin của nó. Mặc dù Apple không đề cập quá nhiều về dung lượng pin trong buổi ra mắt nhưng dự kiến sản phẩm sẽ có thời lượng On Screen nhiều hơn người tiền nhiệm mình 20%.</p><p style=\"margin-left:0px;\">Ngoài ra, Apple cũng trang bị cho chiếc máy khả năng sạc nhanh 20W giúp người dùng có thể sạc nhanh cho máy mà không cần phải chờ đợi quá lâu. iPhone 14 Pro Max 128GB vẫn sẽ được trang bị sạc không dây MagSafe cùng cổng sạc Lightning thay vì USB-C như một số tin đồn trước đây.</p><h3 style=\"margin-left:0px;\"><strong>Ngoại hình nhỏ gọn, cao cấp</strong></h3><p style=\"margin-left:0px;\">Ngoại hình iPhone 14 Pro Max 128GB nhìn chung vẫn không có quá nhiều sự thay đổi so với thế hệ tiền nhiệm. Vẫn là khung viền thép không gỉ với thiết kế vuông vắn mang lại cảm giác sang trọng và vô cùng cao cấp. Điểm khác biệt mà người dùng dễ nhận ra nhất là phần màn hình và cụm camera nay đã được thay đổi với thiết kế mới lạ hơn.</p><figure class=\"image\"><img src=\"https://cdn-v2.didongviet.vn/files/default/2023/7/2/0/1690950370967_7_iphone_14_pro_max_didongviet.jpg\" alt=\"Ngoại hình nhỏ gọn, cao cấp\"></figure><p style=\"margin-left:0px;\">Chiếc máy vẫn sẽ được trang bị chuẩn kháng nước, kháng bụi IP68 giúp người dùng có thể tự tin sử dụng ở bất kì đâu với bất kì điều kiện môi trường khác nhau từ công trường bụi bặm, đi mưa… mà không lo nước và bụi xâm nhập gây tổn hại đến các chi tiết bên trong.</p><h2 style=\"margin-left:0px;\"><strong>Mua iPhone 14 Pro 128GB&nbsp;chính hãng, giá tốt nhất tại Di Động Việt</strong></h2><p style=\"margin-left:0px;\">Hiện nay, Di Động Việt đang là đại lý bán lẻ chính hãng VN/A của Apple Việt Nam (AAR), cung cấp đến người dùng các sản phẩm phần cứng, phần mềm chính hãng Apple. Hiện tại dòng iPhone 14 Pro Max 128GB&nbsp;đang được bán chính thức tại Di Động Việt, khi mua máy tại Di Động Việt khách hàng sẽ được hưởng những quyền lợi sau:</p><ul><li><p style=\"margin-left:0px;\"><strong>Cam kết 100% hàng chính hãng.</strong></p></li><li><p style=\"margin-left:0px;\"><strong>Bảo hành chính hãng theo từng sản phẩm.</strong></p></li><li><p style=\"margin-left:0px;\"><strong>Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm.</strong></p></li></ul><p style=\"margin-left:0px;\">Với mức giá cạnh tranh, Di Động Việt tự tin sẽ mang đến cho người dùng mức giá tốt nhất. Cùng với đó là nhiều chính sách ưu đãi hấp dẫn. Để mua iPhone 14 Pro 1TB chính hãng giá tốt nhất, hãy đến Di Động Việt.</p><p style=\"margin-left:0px;\">Di Động Việt</p>"}}></div> */}
        </Form.Item>
      </Form>
      

    </div>
  );
}