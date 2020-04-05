package com.angular.studentmanagement.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tbl_student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "full_name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "grade")
    private String grade;

    @Column(name="gender")
    private String gender;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "lastUpdatedDate")
    private Date lastUpdatedDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getLastUpdatedDate() {
        return lastUpdatedDate;
    }

    public void setLastUpdatedDate(Date lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", grade='" + grade + '\'' +
                ", createdDate=" + createdDate +
                ", lastUpdatedDate=" + lastUpdatedDate +
                '}';
    }
}
