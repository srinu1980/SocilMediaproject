package com.example.chatserver.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Users1")
public class User {
    @Id
    @GeneratedValue()
    @Column(name = "userId")
    private int userId;
    @Column(name = "username")
    private String username;

    public String getUserName() {
        return username;
    }
}
