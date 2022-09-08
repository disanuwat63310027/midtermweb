import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <img src="dist/img/small.jpg" className="img-squre elevation-2"width={450} alt="User Image" />
      <h2>ชื่อ-สกุล นายดิศานุวัฒน์ อินจรัญ</h2>
      <h2>ชื่อเล่น ออฟ</h2>
      <h2>วัน/เดือน/ปีเกิด 30 ตุลาคม พ.ศ.2544</h2>
      <h2><span>อายุ</span>20ปี</h2>
      <h2>ปัจจุบันศึกษาอยู่มหาวิทยาลัยบูรพาวิทยาเขตจันทบุรี</h2>
    </div>
  )
}
